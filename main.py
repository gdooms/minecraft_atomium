res0 = 0
res1 = 0
res2 = 0
taille = 0
droite: Position = None
gauche: Position = None
v = 0
h = 0
b = 0
pos0: Position = None
pos1: Position = None
pos2: Position = None
pos3: Position = None
pos4: Position = None
pos5: Position = None
pos6: Position = None
pos7: Position = None
pos8: Position = None
list2: List[Position] = []
position: Position = None
p = 0
dg: Position = None

def on_on_chat():
    planche(agent.get_position(), player.position())
player.on_chat("p", on_on_chat)

def on_on_chat2():
    blocks.clone(pos(0, 0, 0),
        pos(110, 110, 110),
        pos(-200, 0, -200),
        CloneMask.REPLACE,
        CloneMode.NORMAL)
player.on_chat("clone", on_on_chat2)

def on_on_chat3(num1):
    blocks.load_structure("atomium", pos(0, 0, 0), DEGREES0)
player.on_chat("paste", on_on_chat3)

def on_on_chat4():
    aretetunnel(agent.get_position(), player.position())
player.on_chat("ar", on_on_chat4)

def boule(position2: Position, num: number):
    shapes.sphere(IRON_BLOCK, position2, num, ShapeOperation.HOLLOW)

def on_on_chat5():
    blocks.save_structure("atomium", pos(0, 0, 0), pos(110, 110, 110))
player.on_chat("copy", on_on_chat5)

def aretetunnel(p1: Position, p2: Position):
    global res0, res1, res2, taille, droite, gauche
    res0 = p1.get_value(Axis.Z) - p2.get_value(Axis.Z)
    res1 = 0
    res2 = p2.get_value(Axis.X) - p1.get_value(Axis.X)
    taille = Math.sqrt(res0 * res0 + res2 * res2) / 2
    droite = pos(res0 / taille, 0, res2 / taille)
    gauche = pos(-1 * (res0 / taille), 0, -1 * (res2 / taille))
    builder.teleport_to(positions.add(positions.add(p1, pos(0, -2, 0)), droite))
    builder.mark()
    builder.teleport_to(positions.add(positions.add(p2, pos(0, -2, 0)), droite))
    builder.raise_wall(IRON_BLOCK, 5)
    builder.teleport_to(positions.add(positions.add(p1, pos(0, -2, 0)), gauche))
    builder.mark()
    builder.teleport_to(positions.add(positions.add(p2, pos(0, -2, 0)), gauche))
    builder.raise_wall(IRON_BLOCK, 5)
    planche(p1, p2)

def on_on_chat6():
    agent.teleport_to_player()
player.on_chat("a", on_on_chat6)

def on_on_chat7(rayon):
    global v, h, b, pos0, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, list2
    v = rayon * (Math.sqrt(3) / 2)
    h = 0.5 * rayon
    b = rayon / 4
    pos0 = pos(0, 0, 0).to_world()
    pos1 = positions.add(pos0, pos(0, rayon, 0))
    pos2 = positions.add(pos0, pos(-1 * v, 1 * h, 1 * h))
    pos3 = positions.add(pos0, pos(v, 1 * h, 1 * h))
    pos4 = positions.add(pos0, pos(0, h, -1 * rayon))
    pos5 = positions.add(pos0, pos(0, -1 * h, rayon))
    pos6 = positions.add(pos0, pos(v, -1 * h, -1 * h))
    pos7 = positions.add(pos0, pos(-1 * v, -1 * h, -1 * h))
    pos8 = positions.add(pos0, pos(0, -1 * rayon, 0))
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
    list2.append(pos1)
    list2.append(pos2)
    list2.append(pos3)
    list2.append(pos4)
    list2.append(pos5)
    list2.append(pos6)
    list2.append(pos7)
    list2.append(pos8)
    for value in list2:
        arete(value, pos0)
        boule(value, b)
    boule(pos0, b)
player.on_chat("c", on_on_chat7)

def on_on_chat8():
    global position
    position = player.position()
    builder.teleport_to(positions.add(position, pos(-2, 0, -2)))
    builder.mark()
    builder.teleport_to(positions.add(position, pos(-2, 0, 2)))
    builder.raise_wall(IRON_BLOCK, 85)
    builder.mark()
    builder.teleport_to(positions.add(position, pos(2, 0, 2)))
    builder.raise_wall(IRON_BLOCK, 85)
    builder.mark()
    builder.teleport_to(positions.add(position, pos(2, 0, -2)))
    builder.raise_wall(IRON_BLOCK, 85)
    builder.mark()
    builder.teleport_to(positions.add(position, pos(-2, 0, -2)))
    builder.raise_wall(IRON_BLOCK, 85)
player.on_chat("t", on_on_chat8)

def arete(p12: Position, p22: Position):
    aretetunnel(p12, p22)
def planche(p13: Position, p23: Position):
    global res0, res2, taille, droite, p, dg
    res0 = p13.get_value(Axis.Z) - p23.get_value(Axis.Z)
    res2 = p23.get_value(Axis.X) - p13.get_value(Axis.X)
    taille = Math.sqrt(res0 * res0 + res2 * res2) / 2
    droite = pos(res0 / taille, 0, res2 / taille)
    for index in range(9):
        p = (index - 4) / 4
        dg = pos(p * droite.get_value(Axis.X),
            0,
            p * droite.get_value(Axis.Z))
        builder.teleport_to(positions.add(positions.add(p13, pos(0, -2, 0)), dg))
        builder.mark()
        builder.teleport_to(positions.add(positions.add(p23, pos(0, -2, 0)), dg))
        builder.line(IRON_BLOCK)
        builder.teleport_to(positions.add(positions.add(p13, pos(0, 2, 0)), dg))
        builder.mark()
        builder.teleport_to(positions.add(positions.add(p23, pos(0, 2, 0)), dg))
        builder.line(IRON_BLOCK)

def on_on_chat9():
    player.teleport(agent.get_position())
player.on_chat("aa", on_on_chat9)

def arete_fine(p14: Position, p24: Position):
    builder.teleport_to(pos(0, 0, 0))
    builder.set_origin()
    builder.teleport_to(p14)
    builder.mark()
    builder.teleport_to(p24)
    builder.line(IRON_BLOCK)
    builder.teleport_to_origin()