// import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
// import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  // const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h2>Meu histórico</h2>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>28 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
