import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider, wait } from '@apollo/client/testing'
import { GET_LOCATIONS } from "../queries/Queries";
import LocationComponent from "../components/LocationComponent";

const mocks = [
    {
        request: {
            query: GET_LOCATIONS,
        },
        result: {
            data: {
                locations: {
                    results: [
                        {
                            id: 1,
                            name: 'Test Location',
                        },
                    ],
                },
            },
        },
    },
];

//Test 1
describe('LocationComponent', () => {
    it('renders search button for locations', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <LocationComponent />
            </MockedProvider>
        );

        expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    //Test 2
    it('updates location list after search', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <LocationComponent />
            </MockedProvider>
        );

        fireEvent.click(screen.getByRole('button', { name: 'Search' }));

        await waitFor(() => {
            expect(screen.getByText('Test Location')).toBeInTheDocument();
        })
    });
});