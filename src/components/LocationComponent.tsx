import { useLazyQuery } from "@apollo/client";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { GET_LOCATIONS } from "../queries/Queries";

const LocationComponent: React.FC = () => {
    const [getLocations, { data, loading, error }] = useLazyQuery(
        GET_LOCATIONS,
    );

    const search = () => {
        getLocations();
    };

    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <Button onClick={search}>Search</Button>
                </Col>
            </Row>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <ul>
                    {data.locations.results.map((location: any) => {
                        return <li key={location.id}>{location.name}</li>
                    })}
                </ul>
            )}
        </Container>
    );
};

export default LocationComponent;