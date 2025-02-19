import { useQuery } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'

const fetchAdminsByEmail = email => {
    return request({ url: `/admin/${email}` })
}

const fetchOperationsById = controlId => {
    return request({ url: `/towerControls/${controlId}` })
}

const DependentQueries = ({ email }) => {
    const { data: admin } = useQuery({
        queryKey: ['admin', email],
        queryFn: () => fetchAdminsByEmail(email)
    })
    const operationId = admin?.data?.control[0]
    const { data: operations } = useQuery({
        queryKey: ['towerControls', operationId],
        queryFn: () => fetchOperationsById(operationId),
        enabled: !!operationId  //this is to ensure that the query doesn't run until the data from previous one is not fetched
    })
    console.log({ admin, operations })
    return (
        <>
            <div>DependentQueries</div>
            <ul>
                <li>RQ provides us with an option to make dependent api calls, where one call is Dependant on the data from the previous call.</li>
                <li>We use separate useQuery calls to fetch the data, but we 'enabled: !!prevApiData?.id' prevents premature API calls.</li>
                <li>This helps in finding the dependent resources efficiently.</li>
            </ul>
            <div>{`Admin Access user: ${admin?.data.name}`}</div>
            <div>{`Control Accessed: ${operationId}`}</div>
            <div>{`Controls Gained: `}{operations?.data.operations.map(operation => <span key={operation} style={{ marginInlineStart: "0.5rem"}}>{`[ _${operation}_ ]`}</span>)}</div>
        </>
    )
}

export default DependentQueries