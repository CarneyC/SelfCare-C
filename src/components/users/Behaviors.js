import React from 'react';
import { Panel } from 'react-bootstrap';

const Behaviors = ({behaviors, conditions}) => {
  return (
    <div className="BehaviorPanel">
      {behaviors.map(behavior =>
        <Panel bsStyle="info" key={behavior.id}>
          <Panel.Heading>
            <Panel.Title>{behavior.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>{behavior.details}</p>
            <p>The following are the common symptoms we track:</p>
            {behavior.conditions.map(id =>
              <ul key={id}>
                <li key={id}>{conditions[id].name}</li>
              </ul>
            )}
          </Panel.Body>
        </Panel>
      )}
    </div>
  )
};

export default Behaviors;
