import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import EmbarkJS from 'Embark/EmbarkJS';
import Web3 from 'web3'
import Button from '@material-ui/core/Button'
import useStyles from './styles/dapp'
import { connectSquareLink } from './utils/squareLink'
import { skaleFileUpload } from './utils/skale'
import { connectTorus } from './utils/torus'

function App(props) {

  useEffect(() => {
  }, [])

  const logthis = async () => {
    const { fileStorage, web3Skale } = this
    console.log({fileStorage, web3Skale})

  }

  const classes = useStyles()
  const { fullWidth } = classes
  return (
    <div className={classes.root}>
      Testing
      <input className={fullWidth} onChange={(e) => skaleFileUpload(e)} type="file" id="files" / >
      <Button className={fullWidth} variant="contained" onClick={connectSquareLink}>
        Connect with Squarelink
      </Button>
      <Button className={fullWidth} variant="contained" onClick={connectTorus}>
        Connect with Torus
      </Button>
      <Button className={fullWidth} variant="contained" onClick={logthis}>Log this</Button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
