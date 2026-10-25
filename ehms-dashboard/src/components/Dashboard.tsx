import PatientCard from './PatientCard'
import Header from './Header'
import usePatients from '../hooks/usePatients'



function Dashboard(){

    const patients = usePatients()

    return(
        <div className="flex flex-col px-10 py-7 gap-7 bg-dashboard-background">
            <Header patients={patients} />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {patients.map((patient) => (
                    <PatientCard
                    key={patient.id}
                    name={patient.name} 
                    sex={patient.sex} 
                    age={patient.age} 
                    heartRate={patient.heartRate}
                    o2Sat={patient.o2Sat}
                    temp={patient.temp}
                    ecg={patient.ecg}
                    status={patient.status}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default Dashboard
