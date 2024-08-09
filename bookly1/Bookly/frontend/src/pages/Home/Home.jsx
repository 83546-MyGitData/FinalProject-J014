// HomePage.js
import React from 'react';
import Card from '../../components/card'; // Import the Card component
import Navbar from '../../components/navbar';

const HomePage = () => {
    // Sample data for the cards
    const cardData = [
        {
            title: 'Science Fiction',
            description: '"Science Fiction" explores futuristic concepts, advanced technology, and space exploration. These novels often delve into speculative scenarios about the future, including the impact of scientific advancements on society and human life, extraterrestrial encounters, and alternate realities.',
            imageUrl: 'https://via.placeholder.com/300'
        },
        {
            title: 'Romance Novel',
            description: '"Romance Novel" centers around the emotional journey of the protagonists as they navigate love and relationships. These stories often explore themes of passion, connection, and personal growth, with a focus on the romantic and emotional bond between characters.',
            imageUrl: 'https://via.placeholder.com/300'
        },
        {
            title: 'Mystery',
            description: '"Mystery" involves solving a puzzle or crime, usually through the perspective of a detective or amateur sleuth. These novels are characterized by their suspenseful plots, intricate clues, and the gradual revelation of secrets leading to a satisfying resolution.',
            imageUrl: 'https://via.placeholder.com/300'
        },
        {
            title: 'Horror',
            description: '',
            imageUrl: 'https://via.placeholder.com/300'
        },
        {
            title: 'Horror',
            description: '"Horror" evokes fear, suspense, and dread through terrifying and often supernatural elements. These books aim to disturb and unsettle readers with dark themes, eerie atmospheres, and spine-chilling scenarios, often featuring monsters, ghosts, or psychological terror.',
            imageUrl: 'https://via.placeholder.com/300'
        },
        {
            title: 'Religious & Philosophy',
            description: '"Religious & Philosophy" books explore spiritual beliefs, ethical questions, and the meaning of life. They offer insights into various faiths, moral dilemmas, and existential topics, providing readers with a deeper understanding of different worldviews and philosophical perspectives.',
            imageUrl: 'https://via.placeholder.com/300'
        },
        {
            title: 'Cookbook',
            description: '"Cookbook" provides a collection of recipes, cooking techniques, and culinary tips. These books offer guidance on preparing a wide range of dishes, from everyday meals to gourmet creations, often accompanied by photographs, ingredient lists, and step-by-step instructions.',
            imageUrl: 'https://via.placeholder.com/300'
        }


    ];

    return (
        <div className="homepage">
           <Navbar/>
           <h1 className='title'>Home</h1>

            <div className="card-container">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
