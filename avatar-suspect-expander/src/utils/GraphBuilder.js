import ColorElement from './ColorElement';

const GraphBuilder = (id, name, element, friends) => {
    let data = {
        nodes: [],
        links: []
    };
    let mapData = new Map();

    data.nodes.push({
        id,
        color: ColorElement.get(element)
    });
    mapData.set(id, { name, element })

    friends.forEach((friend) => {
        data.nodes.push({
            id: friend.id, 
            color: ColorElement.get(friend.element)
        });
        data.links.push({ 
            source: id,
            target: friend.id,
            color: 'black'
        });
        mapData.set(friend.id, { name: friend.name, element: friend.element });
    });

    return { data, mapData };
}

export default GraphBuilder;
