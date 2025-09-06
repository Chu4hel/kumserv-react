const API_BASE_URL = 'https://serviceflow-api.onrender.com/api/public/v1';
const API_KEY = 'd7b1c0a6-5395-4787-a492-6399c406cc9a'; // TODO: Move to .env file

/**
 * Fetches the list of available services.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of service objects.
 */
export const getServices = async () => {
    const response = await fetch(`${API_BASE_URL}/services`, {
        headers: {
            'X-API-KEY': API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch services');
    }

    return response.json();
};

/**
 * Creates a new booking.
 * @param {Object} bookingData - The data for the new booking.
 * @param {number} bookingData.service_id - The ID of the service.
 * @param {string} bookingData.booking_time - The booking time in ISO format (YYYY-MM-DDTHH:mm:ss).
 * @param {string} bookingData.client_name - The client's name.
 * @param {string} bookingData.client_email - The client's email.
 * @param {string} bookingData.client_phone - The client's phone number.
 * @param {string} [bookingData.notes] - Optional notes or special requests.
 * @returns {Promise<Object>} A promise that resolves to the created booking object.
 */
export const createBooking = async (bookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
        // Try to parse error response for more details
        const errorBody = await response.json().catch(() => null);
        console.error('Booking creation failed:', errorBody);
        throw new Error(errorBody?.message || 'Failed to create booking');
    }

    return response.json();
};
