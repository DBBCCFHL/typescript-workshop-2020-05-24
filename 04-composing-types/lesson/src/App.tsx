import React, { FC } from 'react'
import logo from './logo.svg'
import './App.css'

interface Props {
    firstName: string
    lastName: string
}

type EntityType = 'company' | 'person'

enum Role {
    ADMIN = 'Admin',
    EMPLOYEE = 'Employee',
    SUPERADMIN = 'super-admin',
    GUEST = 'Guest',
}
interface Company {
    legalName: string
    address: string
    entityType: 'company'
}

interface Person {
    name: string
    address: string
    entityType: 'person'
}

type Entity = Company | Person

const SelectUserRole: FC = () => {
    const roles = Object.values(Role)

    return (
        <select placeholder="Select a role for the user">
            {roles.map((role) => (
                <option key={role} value={role}>
                    {role}
                </option>
            ))}
        </select>
    )
}

const App: FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <SelectUserRole />
            </header>
        </div>
    )
}

export default App
