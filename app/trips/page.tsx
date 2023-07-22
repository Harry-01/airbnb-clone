import { FC } from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import getReservations from '../actions/getReservations';
import TripsClient from './TripsClient';

interface pageProps {
    
}

const page: FC<pageProps> = async ({}) => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                title='unauthorized'
                subtitle='Please login'/>
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    })

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                title='No trips Found'
                subtitle="Looks like you haven't reserved any trips" />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser} 
            />
        </ClientOnly>
    )
}

export default page