import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

const Search: React.FC = () => {
  const { setSearchText } = useActions()
  const history = useHistory()

  const [text, setText] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setText(e.target.value)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push('/')
    setSearchText(text)
  }

  return (
    <form onSubmit={onSubmit} className="search">
      <input 
        type="text" 
        className="search__input" 
        placeholder="Search" 
        value={text}
        onChange={onChange}
        autoFocus
      />
      <button className="btn btn-secondary" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  )
}

export default Search