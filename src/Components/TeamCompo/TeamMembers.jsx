import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const TeamMembers = ({ element }) => {
    let { name, ProfilePicturesURL, skills_category, _id, bio } = element;
    return (
        <Card className="w-96 m-6 border rounded-lg shadow-lg">
            <div className="flex justify-center">
                <CardHeader color="blue-gray" className="relative flex justify-center w-52 h-52 mt-6 rounded-full overflow-hidden shadow-lg">
                    <img
                        src={ProfilePicturesURL}
                        alt={`${name}'s profile`}
                        className="object-cover w-full h-full"
                    />
                </CardHeader>
            </div>
            <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
                    {name}
                </Typography>
                <Typography className="h-16 text-gray-600">
                    <p>{bio.slice(0, 100) + ' ...'}</p>
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between items-center">
                <div>
                    <p><span className='font-bold mx-4 text-blue-500'>{skills_category}</span></p>
                </div>
                <Link to={`/Member/${_id}`}>
                    <Button variant="text" className="flex items-center gap-2 text-blue-500">
                        Details
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default TeamMembers;
