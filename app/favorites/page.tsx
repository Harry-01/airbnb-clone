import { FC } from 'react'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import getFavoriteListings from '../actions/getFavoriteListings'
import getCurrentUser from '../actions/getCurrentUser'
import FavoritesClient from './FavoritesClient'

interface pageProps {
    
}

const page: FC<pageProps> = async ({}) => {

    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return ( 
            <ClientOnly>
                <EmptyState 
                title='No Favorites found' 
                subtitle='Looks like you have no favorited listings'
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoritesClient
            listings={listings}
            currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default page