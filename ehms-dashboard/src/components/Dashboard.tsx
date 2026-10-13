import {useState} from 'react'
import PatientCard from './PatientCard'
import Header from './Header'



function Dashboard(){
    
    const [patients, setPatients] = useState([
        {"name" : "John Doe", "sex" : "Male", "age" : 45, "heartRate" : 72,"o2Sat": 80,"temp" : "99.1°F","ecg" : "Normal","status" : "Stable"},
        {"name" : "Viki", "sex" : "Female" ,"age" : 22, "heartRate" : 102,"o2Sat": 75,"temp" : "99.2°F","ecg" : "Cooked","status" : "Critical"}
    ])

    return(
        <div className="flex flex-col px-10 py-7 gap-7 bg-dashboard-background">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {patients.map((patient) => (
                    <PatientCard 
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
