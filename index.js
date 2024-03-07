const Notification = props => {
  return (
    <div className={props.className}>
      <img src={props.src} />
      <p>{props.text}</p>
    </div>
  )
}

const element = (
  <div>
    <h1>Notification</h1>
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      text='Information-Message'
      className='info-msg'
    />
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      text='Sucess Management'
    />
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      text='Waring Management'
    />
    <Notification
      src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      text='Sucess Management'
    />
  </div>
)
ReactDOM.render(element, document.getElementById('root'))
