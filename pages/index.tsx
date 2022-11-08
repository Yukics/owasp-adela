import * as React from 'react';

//* Functions
import { GetServerSideProps } from 'next';

export default function Index() {
    return <></>
}

export const getServerSideProps: GetServerSideProps= async (context) => {

    const { res } = await context;
    res.writeHead(301, { Location: '/signin' })
    res.end()

    return true

}