import React, { FunctionComponent, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'

interface Props {
    firstName: string
}

const App: FunctionComponent<Props> = ({ children, firstName }) => {
    const [value, setValues] = React.useState('')

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('form submitted', value)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setValues(event.target.value)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onChange={() => {}}>{firstName} </p>
                <form onSubmit={onSubmit}>
                    <input type="text" value={value} onChange={onChange} />
                </form>
                {children}
            </header>
        </div>
    )
}

export default App
