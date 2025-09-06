const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Fetches the list of available services.
 * @param {number} [skip=0] - The number of services to skip for pagination.
 * @param {number} [limit=100] - The maximum number of services to return.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of service objects.
 */
export const getServices = async (skip = 0, limit = 100) => {
    const response = await fetch(`${API_BASE_URL}/services?skip=${skip}&limit=${limit}`, {
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
 * Creates a new booking or returns an existing one.
 * @param {Object} bookingData - The data for the new booking.
 * @param {number} bookingData.service_id - The ID of the service.
 * @param {string} bookingData.booking_time - The booking time in ISO format (YYYY-MM-DDTHH:mm:ss).
 * @param {string} bookingData.client_name - The client's name.
 * @param {string} [bookingData.client_email] - The client's email.
 * @param {string} bookingData.client_phone - The client's phone number.
 * @param {string} [bookingData.notes] - Optional notes or special requests.
 * @param {string} [bookingData.description] - Optional description.
 * @param {boolean} [allowDuplicates=false] - Whether to allow creating a new booking if one already exists for the same service and time.
 * @returns {Promise<Object>} A promise that resolves to the created or existing booking object.
 */
export const createBooking = async (bookingData, allowDuplicates = false) => {
    const response = await fetch(`${API_BASE_URL}/bookings?allow_duplicates=${allowDuplicates}`, {
        method: 'POST',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        console.error('Booking creation failed:', errorBody);
        throw new Error(errorBody?.detail?.[0]?.msg || errorBody?.message || 'Failed to create booking');
    }

    // Returns 201 for created, 200 for existing
    return response.json();
};

/**
 * Creates a new subscriber or returns an existing one.
 * @param {Object} subscriberData - The data for the new subscriber.
 * @param {string} subscriberData.email - The subscriber's email.
 * @returns {Promise<Object>} A promise that resolves to the created or existing subscriber object.
 */
export const createSubscriber = async (subscriberData) => {
    const response = await fetch(`${API_BASE_URL}/subscribers`, {
        method: 'POST',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriberData),
    });

    if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        console.error('Subscription failed:', errorBody);
        throw new Error(errorBody?.detail?.[0]?.msg || errorBody?.message || 'Failed to create subscriber');
    }
    
    // Returns 201 for created, 200 for existing
    return response.json();
};