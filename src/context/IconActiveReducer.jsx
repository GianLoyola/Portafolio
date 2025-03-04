
export const IconActiveReducer = (iconsActive, action) => {
    switch (action.type) {
        case "TOGGLE_FILTER":
            return iconsActive.map(icon =>
                icon.id === action.payload ? { ...icon, active: !icon.active } : icon
            );

        default:
            return iconsActive;
    }
};


