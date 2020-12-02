import React from 'react';

const TabelaAgendados = ({listaDados}) => {

  return (
    <div>      
      <h1>listagem de agendados</h1>
      <table cellPadding="0" cellSpacing="0" width="90%" align="center" border="0">
        <thead>
          <tr>
            <td>Redes Sociais</td>
            <td>Mídia</td>
            <td>Texto</td>
            <td>Data</td>
            <td>Ações</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>          
            <td>Redes Sociais</td>
            <td><img src={listaDados.image} alt="preview"/></td>
            <td>{listaDados.descricao}</td>
            <td>{listaDados.datas}</td>
            <td>Ações</td>
            <td>Status</td>
          </tr>
        </tbody>  
      </table>
    </div>
  )
}

export default TabelaAgendados;