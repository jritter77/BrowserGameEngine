class TreeTools {

    static forAll(node, foo) {
        if (Array.isArray(node)) {
            node.forEach(foo);
            return;
        }

        for (let n in node) {
            TreeTools.forAll(node[n], foo);
        }
    }


    static executeEach(node, foo) {
        if (Array.isArray(node)) {
            node.forEach(el => {
                if (el[foo]) {
                    el[foo]();
                }
            });
            return;
        }

        for (let n in node) {
            TreeTools.executeEach(node[n], foo);
        }
    }
}

export {TreeTools}