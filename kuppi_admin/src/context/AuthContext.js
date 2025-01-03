import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [profile, setProfile] = useState('')
  const [name, setName] = useState('')
  const [total, setTotal] = useState('')
  const [withdrawal, setWithdrawal] = useState('')
  const [service, setSevice] = useState('')
  const [reserved, setReserved] = useState('')
  const [balance, setBalance] = useState('')

  const [open, isOpen] =useState(false)

  const [kuppi, setKuppi] = useState('')
  const [tutor, setTutor] = useState('')

  const [module, setModule] = useState('') 

  const setValue = (profile, name, total, withdrawal, service, reserved, balance) =>{
    setProfile(profile)
    setName(name)
    setTotal(total)
    setWithdrawal(withdrawal)
    setSevice(service)
    setReserved(reserved)
    setBalance(balance)
  }

  const onClickKuppi = (kuppi, tutor) => {
    setKuppi(kuppi)
    setTutor(tutor)
  }

  const onClickModule =(module) => {
    setModule(module)
  }

  const onClick = () => {
    isOpen((prev)=> !prev)
  }

  return (
    <AuthContext.Provider value={{
        profile, name, total, withdrawal, service, reserved, balance, setValue, open, onClick,
        kuppi, tutor, onClickKuppi, 
        module, onClickModule
    }}>
        {children}
    </AuthContext.Provider>
  )
}
