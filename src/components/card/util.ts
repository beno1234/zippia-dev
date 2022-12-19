// limit for description

export const getShortDescription = (value = "", limit = 250) => {
    let newValue = value.substring(0, limit);

    return newValue.substring(0, newValue.lastIndexOf(" ")) + "...";
}