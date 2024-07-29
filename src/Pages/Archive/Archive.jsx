import React from 'react';
import { Gallery } from '../../Components/ArchiveCompo/Gallery';
import { Gallery_02 } from '../../Components/ArchiveCompo/Gallery_02';
import DocumentTitle from 'react-document-title';


const Archive = () => {
    return (<>
   
        <DocumentTitle title='Oli Ullah | Archive '>
        </DocumentTitle>
        <div>
            <div className='mx-4 lg:mx-48'>
            <Gallery></Gallery>
                <div className='my-6'>
            <Gallery_02></Gallery_02>
                </div>
            </div>
        </div>
        </>
    );
};

export default Archive;