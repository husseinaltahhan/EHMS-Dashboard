import {useState} from 'react'
import PatientCard from './PatientCard'
import Header from './Header'

function Dashboard(){
    
    const [patients, setPatients] = useState([1,2,2,3,45,6,7])

    return(
        <div className="flex flex-col px-10 py-7 gap-7 bg-dashboard-background">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {patients.map((patient) => (
                    <PatientCard />
                ))}
            </div>
        </div>
        
    )
}

export default Dashboard
