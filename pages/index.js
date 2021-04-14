import Head from 'next/head'
import styles from '../styles/Home.module.css'
import awsconfig from "../src/aws-exports";
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify'

if (process.browser) {
  // Client-side-only code
  const { host } = window.location;

  // Fix issues with multiple redirect urls.
  // Try to figure out which one to use...
  if (awsconfig.oauth.redirectSignIn.includes(',')) {
    const filterHost = url => new URL(url).host === host;
    awsconfig.oauth.redirectSignIn = awsconfig.oauth.redirectSignIn
      .split(',')
      .filter(filterHost)
      .shift();
      awsconfig.oauth.redirectSignOut = awsconfig.oauth.redirectSignOut
      .split(',')
      .filter(filterHost)
      .shift();
  }
}


Amplify.configure({...awsconfig, ssr: true });


export default function Home() {
  return (
    <div>
    <AmplifyAuthenticator>
    <div>
      My App
      <AmplifySignOut />
    </div>
  </AmplifyAuthenticator>
  <button onClick={() => Auth.federatedSignIn()}>Sign In</button>

    </div>
  )
}
