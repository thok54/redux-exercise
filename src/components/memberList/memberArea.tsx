import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'
import { useState } from 'react';

interface Props {
  members: Array<MemberEntity>;
  loadMembers: () => any;
}

export const MemberAreaComponent = (props : Props) => {
  /* Create a local state to hold the name of the grouped to be loaded */ 
  const [organizationName, setorganizationName] = useState("lemoncode");

  return (
  <div>
      <MemberTableComponent members={props.members}/>
      <br/>
      {/* Create the input entry and place it side by side with the load button. */}
      Organization:
        <input
          type="text"
          value={organizationName}
          /* Connect input with that local state. */
          onChange={event => setorganizationName(event.target.value)}
        />
      <input type="submit"
              value="load"
              className="btn btn-default"
              /* Launch the action informing the param in the input. */
              onClick={() => props.loadMembers()}
      />
  </div>
  );
}
