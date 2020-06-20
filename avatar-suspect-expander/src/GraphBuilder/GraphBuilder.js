const colorElement = new Map();
colorElement.set('fire', '#C0392B');
colorElement.set('water', '#2980B9');
colorElement.set('air', '#85C1E9');
colorElement.set('earth', '#D68910');

const sampleData = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
};

const GraphBuilder = (id, name, element, friends) => {
    let data = {
        nodes: [],
        links: []
    };

    let mapData = new Map();

    data.nodes.push({ id });
    mapData.set(id, { name, element })

    friends.forEach((friend) => {
        data.nodes.push({
            id: friend.id, 
            color: colorElement.get(friend.element),
            size: 500,
            fontSize: 15
        });
        data.links.push({ 
            source: id,
            target: friend.id,
            color: 'black'
        });
        mapData.set(friend.id, { name: friend.name, element: friend.name });
    });

    return { data, mapData };
}

export default GraphBuilder;
