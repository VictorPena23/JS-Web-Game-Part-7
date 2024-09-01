// Create the playable character
const pc = newPlayableCharacter(100, 110);

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300);

// Define the sleep function
async function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

// Define the movement functions for each direction
async function walkEast(time) {
  await sleep(time);
  npc.walkEast();
}

async function walkNorth(time) {
  await sleep(time);
  npc.walkNorth();
}

async function walkSouth(time) {
  await sleep(time);
  npc.walkSouth();
}

async function walkWest(time) {
  await sleep(time);
  npc.walkWest();
}

// Define the moveNPC function to control the NPC's movement
async function moveNPC() {
  while (true) { // Loop to keep the NPC moving indefinitely
    await walkNorth(1400);
    await walkEast(1200);
    await walkSouth(300);
    await walkEast(1500);
    await walkSouth(1500);
    await walkWest(2700);
    await walkNorth(400);
  }
}

// Invoke the moveNPC function to start the movement
moveNPC();

// Create the inventory
const inventory = newInventory();
move(inventory).to(0, 0);

// Create everything else (items, trees, etc.)
move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newImage('assets/sword.png')).to(500, 555);
move(newImage('assets/shield.png')).to(165, 335);
move(newImage('assets/staff.png')).to(600, 250);
