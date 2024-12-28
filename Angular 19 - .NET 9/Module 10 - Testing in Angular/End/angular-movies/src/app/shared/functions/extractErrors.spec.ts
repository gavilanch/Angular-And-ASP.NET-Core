import { extractErrors } from "./extractErrors";

describe('extractErrors', () => {
    it('should return an empty array when passed an empty object', () => {
        // Preparation
        const input = {error: {errors: {}}};

        // Testing
        const result = extractErrors(input);

        // Verification
        expect(result).toEqual([]);
    });

    it ('should extract the errors correctly', () => {

        const input = {error: {errors: {
            name: ['this field is required', 'it should start with an uppercase'],
            email: ['invalid email']
        }}};

        const result = extractErrors(input);

        expect(result).toEqual([
            'name: this field is required',
            'name: it should start with an uppercase',
            'email: invalid email'
        ]);

    });
});