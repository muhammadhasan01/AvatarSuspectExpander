import ColorElement from '../Style/ColorElement';

const GraphExpander = (graphData, id, friends) => {
    let { data, mapData, mapLinks } = graphData;
    friends.forEach((friend) => {
        if (mapData.has(friend.id) === false) {
            mapData.set(friend.id, { name: friend.name, element: friend.element });
            data.nodes.push({
                id: friend.id, 
                color: ColorElement.get(friend.element)
            });
        }
        if (mapLinks.has((id, friend.id)) === false) {
            mapLinks.set((id, friend.id), true);
            mapLinks.set((friend.id, id), true);
            data.links.push({ 
                source: id,
                target: friend.id,
                color: 'black'
            });
        }
    });

    return { data, mapData, mapLinks };
}

export default GraphExpander;