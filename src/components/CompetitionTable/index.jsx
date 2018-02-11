import React from 'react';
import PropTypes from 'prop-types';

import './CompetitionTable.scss';

const CompetitionTable = ({
  standing,
}) => (
  <table className="CompetitionTable">
    <thead>
      <tr>
        <th>
          #
        </th>

        <th>
          Team
        </th>

        <th>
          Pl
        </th>

        <th>
          W
        </th>

        <th>
          D
        </th>

        <th>
          L
        </th>

        <th>
          F
        </th>

        <th>
          A
        </th>

        <th>
          GD
        </th>

        <th>
          Pts
        </th>
      </tr>
    </thead>

    <tbody>
      {standing.map(item => (
        <tr key={item.position}>
          <td>
            {item.position}
          </td>

          <td>
            {item.teamName}
          </td>

          <td>
            {item.playedGames}
          </td>

          <td>
            {item.wins}
          </td>

          <td>
            {item.draws}
          </td>

          <td>
            {item.losses}
          </td>

          <td>
            {item.goals}
          </td>

          <td>
            {item.goalsAgainst}
          </td>

          <td>
            {item.goalDifference}
          </td>

          <td>
            {item.points}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

CompetitionTable.propTypes = {
  standing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default CompetitionTable;