import React from 'react'
import { Helmet } from 'react-helmet'
import { RouteComponentProps } from 'react-router-dom'

const Json: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id } = match.params
  return (
    <>
      <Helmet>
        <title>{id}</title>
      </Helmet>
      <h1>JSON</h1>
      <h4>{id}</h4>
    </>
  )
}

export default Json
