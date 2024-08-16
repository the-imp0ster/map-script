# Map Grid Generator

This script generates a 50x50 map grid with various terrain types using simplex noise.

## Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Adjust Parameters to Your Liking:**

    - Height and width can be modified to provide a different sized grid.
    - Modify names of terrains as you see fit.

3. **Run the Script:**
    This will generate a file called ```mapGrid.json``` that contains your grid data.
    ```bash
    node index.js
    ```

### Current Terrain Types
- Water
- Coast
- Desert
- Plains
- Forest
- Mountains
- Arctic