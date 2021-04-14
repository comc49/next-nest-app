import Head from 'next/head'
import styles from '../styles/Home.module.css'
import awsExports from "../src/aws-exports";
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify'



Amplify.configure({...awsExports, ssr: true });


export default function Home() {
  return (
    <div>
    <AmplifyAuthenticator>
    <div>
      My App
      <AmplifySignOut />
    </div>
  </AmplifyAuthenticator>
  <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Sign In</button>

    </div>
  )
}
