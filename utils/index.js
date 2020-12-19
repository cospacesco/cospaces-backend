async function replaceId(field, service) {
    return (await service.GetById(field))._id;
}

module.exports = {
    replaceId
}
