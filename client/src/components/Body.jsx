import IndividualAuth from './IndividualAuth'

const Body = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '40px',
            gap: '20px',
            flexWrap: 'wrap',
        }}>
            <IndividualAuth />
        </div>
    );
};

export default Body;
