'use client'

import '@/styles/main.css'

export function FormLabel({ text, style, htmlfor }) {
  return (
    <label htmlFor={htmlfor} className={style}>{text}</label>
  )
}

export function FormButton({ text, style, handleClick }) {
  console.log(text, style, handleClick)
  return (
    <button className={style}>{text}</button>
  )
}

export function FormInput({ type, style, id, placeholder }) {
  return (
    <input name='zip' type={type} className={style} id={id} placeholder={placeholder}></input>
  )
}

export function Sidebar() {
  function handleClick(e) {
    const zipCode = e.get('zip')
    console.log(`e: ${e}`, `zipcode: ${zipCode}`)
    if (zipCode) {
      console.log(`true: ${zipCode}`)
      return <h1>{zipCode}</h1>
    }
  }
  return (
    <div>
      <div id="sub-side">
        <form action={handleClick}>
          <FormLabel htmlfor={'location-with-zip'} style={'form-label'} text={'Zip Code'} />
          <div className="side-input">
            <FormInput type={'text'} style={'form-control'} id={'location-with-zip'} placeholder={'12345'} />
          </div>
          <div className="side-button">
            <FormButton text={'Submit'} style={'side-button'} />
          </div>
        </form>
      </div>
    </div>
  )
}
