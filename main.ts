let res0 = 0
let res1 = 0
let res2 = 0
let taille = 0
let droite: Position = null
let gauche: Position = null
let v = 0
let h = 0
let b = 0
let pos0: Position = null
let pos1: Position = null
let pos2: Position = null
let pos3: Position = null
let pos4: Position = null
let pos5: Position = null
let pos6: Position = null
let pos7: Position = null
let pos8: Position = null
let list2: Position[] = []
let position: Position = null
let p = 0
let dg: Position = null
player.onChat("p", function () {
    planche(agent.getPosition(), player.position())
})
player.onChat("clone", function () {
    blocks.clone(
    pos(0, 0, 0),
    pos(110, 110, 110),
    pos(-200, 0, -200),
    CloneMask.Replace,
    CloneMode.Normal
    )
})
player.onChat("paste", function (rayon) {
    blocks.loadStructure(
    "atomium",
    pos(0, 0, 0),
    DEGREES0
    )
})
function arete_fine (p14: Position, p24: Position) {
    builder.teleportTo(pos(0, 0, 0))
    builder.setOrigin()
    builder.teleportTo(p14)
    builder.mark()
    builder.teleportTo(p24)
    builder.line(IRON_BLOCK)
    builder.teleportToOrigin()
}
player.onChat("ar", function () {
    aretetunnel(agent.getPosition(), player.position())
})
function boule (position2: Position, num: number) {
    shapes.sphere(
    IRON_BLOCK,
    position2,
    num,
    ShapeOperation.Hollow
    )
}
player.onChat("copy", function () {
    blocks.saveStructure(
    "atomium",
    pos(0, 0, 0),
    pos(110, 110, 110)
    )
})
function aretetunnel (p1: Position, p2: Position) {
    res0 = p1.getValue(Axis.Z) - p2.getValue(Axis.Z)
    res1 = 0
    res2 = p2.getValue(Axis.X) - p1.getValue(Axis.X)
    taille = Math.sqrt(res0 * res0 + res2 * res2) / 2
    droite = pos(res0 / taille, 0, res2 / taille)
    gauche = pos(-1 * (res0 / taille), 0, -1 * (res2 / taille))
    builder.teleportTo(positions.add(
    positions.add(
    p1,
    pos(0, -2, 0)
    ),
    droite
    ))
    builder.mark()
    builder.teleportTo(positions.add(
    positions.add(
    p2,
    pos(0, -2, 0)
    ),
    droite
    ))
    builder.raiseWall(IRON_BLOCK, 5)
    builder.teleportTo(positions.add(
    positions.add(
    p1,
    pos(0, -2, 0)
    ),
    gauche
    ))
    builder.mark()
    builder.teleportTo(positions.add(
    positions.add(
    p2,
    pos(0, -2, 0)
    ),
    gauche
    ))
    builder.raiseWall(IRON_BLOCK, 5)
    planche(p1, p2)
}
player.onChat("a", function () {
    agent.teleportToPlayer()
})
player.onChat("c", function (rayon) {
    v = rayon * (Math.sqrt(3) / 2)
    h = 0.5 * rayon
    b = rayon / 4
    pos0 = pos(0, 0, 0).toWorld()
    pos1 = positions.add(
    pos0,
    pos(0, rayon, 0)
    )
    pos2 = positions.add(
    pos0,
    pos(-1 * v, 1 * h, 1 * h)
    )
    pos3 = positions.add(
    pos0,
    pos(v, 1 * h, 1 * h)
    )
    pos4 = positions.add(
    pos0,
    pos(0, h, -1 * rayon)
    )
    pos5 = positions.add(
    pos0,
    pos(0, -1 * h, rayon)
    )
    pos6 = positions.add(
    pos0,
    pos(v, -1 * h, -1 * h)
    )
    pos7 = positions.add(
    pos0,
    pos(-1 * v, -1 * h, -1 * h)
    )
    pos8 = positions.add(
    pos0,
    pos(0, -1 * rayon, 0)
    )
    blocks.place(IRON_BLOCK, pos0)
    blocks.place(IRON_BLOCK, pos1)
    blocks.place(IRON_BLOCK, pos2)
    blocks.place(IRON_BLOCK, pos3)
    blocks.place(IRON_BLOCK, pos4)
    blocks.place(IRON_BLOCK, pos5)
    blocks.place(IRON_BLOCK, pos6)
    blocks.place(IRON_BLOCK, pos7)
    blocks.place(IRON_BLOCK, pos8)
    arete(pos1, pos4)
    arete(pos4, pos7)
    arete(pos7, pos2)
    arete(pos2, pos1)
    arete(pos3, pos6)
    arete(pos6, pos8)
    arete(pos8, pos5)
    arete(pos5, pos3)
    arete(pos1, pos3)
    arete(pos4, pos6)
    arete(pos7, pos8)
    arete(pos2, pos5)
    list2 = []
    list2.push(pos1)
    list2.push(pos2)
    list2.push(pos3)
    list2.push(pos4)
    list2.push(pos5)
    list2.push(pos6)
    list2.push(pos7)
    list2.push(pos8)
    for (let value of list2) {
        arete(value, pos0)
        boule(value, b)
    }
    boule(pos0, b)
})
player.onChat("t", function () {
    position = player.position()
    builder.teleportTo(positions.add(
    position,
    pos(-2, 0, -2)
    ))
    builder.mark()
    builder.teleportTo(positions.add(
    position,
    pos(-2, 0, 2)
    ))
    builder.raiseWall(IRON_BLOCK, 85)
    builder.mark()
    builder.teleportTo(positions.add(
    position,
    pos(2, 0, 2)
    ))
    builder.raiseWall(IRON_BLOCK, 85)
    builder.mark()
    builder.teleportTo(positions.add(
    position,
    pos(2, 0, -2)
    ))
    builder.raiseWall(IRON_BLOCK, 85)
    builder.mark()
    builder.teleportTo(positions.add(
    position,
    pos(-2, 0, -2)
    ))
    builder.raiseWall(IRON_BLOCK, 85)
})
function arete (p12: Position, p22: Position) {
    aretetunnel(p12, p22)
}
function planche (p13: Position, p23: Position) {
    res0 = p13.getValue(Axis.Z) - p23.getValue(Axis.Z)
    res2 = p23.getValue(Axis.X) - p13.getValue(Axis.X)
    taille = Math.sqrt(res0 * res0 + res2 * res2) / 2
    droite = pos(res0 / taille, 0, res2 / taille)
    for (let index = 0; index <= 8; index++) {
        p = (index - 4) / 4
        dg = pos(p * droite.getValue(Axis.X), 0, p * droite.getValue(Axis.Z))
        builder.teleportTo(positions.add(
        positions.add(
        p13,
        pos(0, -2, 0)
        ),
        dg
        ))
        builder.mark()
        builder.teleportTo(positions.add(
        positions.add(
        p23,
        pos(0, -2, 0)
        ),
        dg
        ))
        builder.line(IRON_BLOCK)
        builder.teleportTo(positions.add(
        positions.add(
        p13,
        pos(0, 2, 0)
        ),
        dg
        ))
        builder.mark()
        builder.teleportTo(positions.add(
        positions.add(
        p23,
        pos(0, 2, 0)
        ),
        dg
        ))
        builder.line(IRON_BLOCK)
    }
}
player.onChat("aa", function () {
    player.teleport(agent.getPosition())
})
