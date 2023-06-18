type Props = {
    children: React.ReactNode
}

import Layout  from 'layouts/DefaultLayout'
export default function Providers({ children }: Props){
    return (
        <Layout>
            { children }
        </Layout>
    )
}