import { FC } from 'react'
import { SafeListing, SafeUser } from '../types'
import Container from '@/app/components/Container'
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient: FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {
    return ( 
        <Container>
            <Heading 
            title="Favorites"
            subtitle="List of places you have favorited!"
            />

            <div className='
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-col-6
            gap-8
            '>
                {listings.map((listing:any) => (
                    <ListingCard
                    key={listing.id}
                    currentUser={currentUser}
                    data={listing}
                    />
                        
                ))}
                </div>
        </Container>
    )
}

export default FavoritesClient