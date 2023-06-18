import { SocialMediaList } from 'components'
import { Navbar  } from './components'

type Props = {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: Props ){
    return (
        <div className="flex flex-col min-h-screen bg-zinc-100">
            <header className="bg-gray-800 text-white p-4">
                <Navbar />
            </header>

            <main className="container mx-auto mt-8">
                <SocialMediaList />
                { children }
            </main>

            <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
                <p className="text-center">&copy; {`2023 - ${new Date().getFullYear()} | Jeff <dev />. Todos os direitos reservados`}.</p>
            </footer>
        </div>
    )
}