import Head from "next/head";
import layoutStyle from '../styles/layout.module.scss'

const Layout = props => (
    <div className={layoutStyle.layoutContainer}>
        <Head>
            <title>Exchange Rate App</title>
            <meta name="description" content="Description"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        
        <main>
            {props.children}
        </main>
    </div>
)

export default Layout;