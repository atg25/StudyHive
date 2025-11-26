// Sample Notes and Summaries Database
const sampleData = {
  cs101: {
    notes: `Binary Search Algorithm - CS 101 Lecture Notes

Definition: Binary search is a searching algorithm that finds the position of a target value within a sorted array.

Key Concepts:
- Divide and conquer approach
- Works only on sorted arrays
- Compares target value to middle element
- Eliminates half of remaining elements each iteration

Time Complexity:
- Best case: O(1) - element found at middle
- Average case: O(log n)
- Worst case: O(log n) - element not found

Space Complexity: O(1) for iterative, O(log n) for recursive

Algorithm Steps:
1. Find middle element
2. If target equals middle, return index
3. If target < middle, search left half
4. If target > middle, search right half
5. Repeat until found or subarray empty

Example: Finding 23 in [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78]
- Middle = 23 (index 5) → Found!

Advantages:
- Much faster than linear search for large datasets
- Efficient for sorted data

Disadvantages:
- Requires sorted array
- Not suitable for linked lists`,
    summary: `**Binary Search: Complete Study Guide**
Binary search is a powerful divide-and-conquer algorithm for finding elements in sorted arrays. It achieves O(log n) time complexity by eliminating half the search space with each comparison—exponentially faster than linear search's O(n).
**Core Algorithm:**
1. Start with left=0, right=array.length-1
2. While left ≤ right:
   - Calculate mid = left + (right-left)/2 (prevents overflow)
   - If array[mid] == target: return mid (found!)
   - If array[mid] < target: search right half (left = mid+1)
   - If array[mid] > target: search left half (right = mid-1)
3. If not found, return -1
**Why It's Fast:**
With 1,000 elements, binary search needs maximum 10 comparisons (log₂ 1000 ≈ 10), while linear search needs up to 1,000. For 1 million elements: 20 vs 1,000,000 comparisons!
**Critical Requirements:**
- Array MUST be sorted (ascending or descending)
- Unsorted data produces incorrect results
- Sorting overhead is O(n log n) but worthwhile for multiple searches
**Complexity Analysis:**
- **Time:** O(log n) average/worst, O(1) best case
- **Space:** O(1) iterative, O(log n) recursive
- Iterative implementation preferred for space efficiency
**Step-by-Step Example:**
Finding 67 in [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78]:
- Check middle (index 5): 23 < 67 → search right
- Check middle of right half (index 8): 56 < 67 → search right
- Check middle (index 9): 67 == 67 → Found in 3 steps!
**Real-World Applications:**
1. **Databases:** Index searching for fast record retrieval
2. **Spell Checkers:** Looking up words in sorted dictionaries
3. **Version Control:** Git bisect finds bugs by searching commit history
4. **Game Development:** Collision detection in sorted object lists
5. **File Systems:** B-trees use binary search for directory structures
**vs. Other Algorithms:**
- **Linear Search:** O(n) time, works on unsorted data, simpler code
- **Hash Tables:** O(1) average but requires O(n) extra space
- **Jump Search:** O(√n) middle ground option
- Binary search wins for sorted data with multiple queries
**Common Mistakes to Avoid:**
1. **Integer Overflow:** Use \`left + (right-left)/2\` not \`(left+right)/2\`
2. **Infinite Loops:** Always update left or right in each iteration
3. **Off-by-One:** Use \`while (left <= right)\` not \`while (left < right)\`
4. **Unsorted Data:** Verify array is sorted first!
**Advanced Variants:**
- **First/Last Occurrence:** Modify to find boundaries when duplicates exist
- **Insertion Point:** Find where to insert element to maintain sorted order
- **Rotated Arrays:** Binary search on arrays rotated at unknown pivot
- **2D Search:** Apply binary search to sorted matrices
- **Binary Search on Answer:** Optimize problems by searching solution space
**Implementation Best Practices:**
- Test edge cases: empty array, single element, target at boundaries
- Use library functions (C++ lower_bound/upper_bound, Python bisect)
- Add precondition checks in development builds
- Profile before optimizing—correctness first, speed second
**Key Takeaway:**
Binary search is the gold standard for searching sorted data. Master this algorithm—it's foundational for technical interviews and appears everywhere in computer science from databases to machine learning. The logarithmic performance makes it indispensable for large datasets.`,
    flashcards: [
      {
        q: "What is binary search?",
        a: "A searching algorithm that finds a target value in a sorted array using divide-and-conquer",
      },
      {
        q: "What is the time complexity of binary search?",
        a: "O(log n) average and worst case, O(1) best case",
      },
      {
        q: "What is the key requirement for binary search?",
        a: "The array must be sorted",
      },
      {
        q: "How does binary search eliminate elements?",
        a: "By comparing to the middle element and discarding half the remaining elements",
      },
      {
        q: "What is the space complexity of iterative binary search?",
        a: "O(1) - constant space",
      },
      {
        q: "What is the best case scenario for binary search?",
        a: "When the target element is at the middle position (O(1))",
      },
      {
        q: "Why can't binary search work on linked lists efficiently?",
        a: "Because accessing the middle element requires O(n) traversal in linked lists",
      },
      {
        q: "What happens if the target is not in the array?",
        a: "The algorithm returns -1 or null after checking all possible positions",
      },
    ],
  },

  history: {
    notes: `The American Civil War (1861-1865) - Lecture Notes
Causes:
- Slavery debate between North and South
- Economic differences (industrial North vs agricultural South)
- States' rights vs federal power
- Election of Abraham Lincoln (1860)
- Southern states felt threatened
Timeline:
- April 12, 1861: Fort Sumter attack (war begins)
- 1862: Battle of Antietam (bloodiest single day)
- Jan 1, 1863: Emancipation Proclamation
- July 1863: Battle of Gettysburg (turning point)
- April 9, 1865: Lee surrenders at Appomattox
Key Figures:
- Abraham Lincoln (Union President)
- Jefferson Davis (Confederate President)
- Ulysses S. Grant (Union General)
- Robert E. Lee (Confederate General)
- Frederick Douglass (Abolitionist)
Major Battles:
- Bull Run, Antietam, Gettysburg, Vicksburg, Atlanta
Outcomes:
- Slavery abolished (13th Amendment)
- Federal government supremacy established
- South economically devastated
- 620,000+ deaths
- Reconstruction era begins`,
    summary: `**The American Civil War (1861-1865): In-Depth Summary**
The American Civil War stands as the deadliest conflict in U.S. history and the defining crisis of the 19th century. From 1861-1865, the nation literally tore itself apart over fundamental questions about human rights, states' sovereignty, and the nation's economic future. Understanding this war is essential to understanding modern America.
II. ROOT CAUSES OF THE WAR
A. ECONOMIC DIVERGENCE (1800-1860)
The North and South developed fundamentally different economic systems:
**Northern Economy:**
- Industrial manufacturing base growing rapidly
- Wage labor system with immigrant workers
- Growing factory towns and cities (New York, Boston, Philadelphia)
- Heavy investment in railroads, canals, infrastructure
- Diversified economy (agriculture, manufacturing, commerce)
- Supported protective tariffs to help domestic industry compete
**Southern Economy:**
- Agricultural economy based on cash crops
- Cotton production dominated ("King Cotton" - 75% of world supply)
- Also tobacco, rice, sugar cane
- Plantation system requiring massive labor force
- Enslaved people as both labor and $3 billion capital investment
- Opposed tariffs that made imported goods expensive
- Economic interests tied to European textile markets
By 1860, the systems were incompatible—one based on free labor, one on enslaved labor. Southern wealth concentrated in land and enslaved people rather than industry.
B. SLAVERY AS THE CENTRAL ISSUE
While some argue the war was about "states' rights," the historical record is clear: slavery was the central cause. Confederate states explicitly stated this in their secession declarations.
**Growth of Abolitionist Movement:**
- 1830s-1850s: Growing moral opposition to slavery in North
- Leaders: Frederick Douglass, Harriet Tubman, William Lloyd Garrison, Harriet Beecher Stowe
- "Uncle Tom's Cabin" (1852) galvanized public opinion—sold 300,000 copies first year
- Underground Railroad helping enslaved people escape to freedom
- Religious groups (Quakers, Methodists) condemning slavery as sin
**Southern Defense of Slavery:**
- Economic necessity argument—collapse without slave labor
- "Positive good" theory (John C. Calhoun)—claimed slavery benefited enslaved people
- Racial justifications based on pseudoscience
- Biblical defenses citing Old Testament passages
- Fear of economic devastation if slavery ended
- Fear of racial violence if 4 million enslaved people freed at once
**Political Compromises Breaking Down:**
- Missouri Compromise (1820): Maintained slave/free state balance temporarily
- Compromise of 1850: Included harsh Fugitive Slave Act requiring North to return runaways
- Kansas-Nebraska Act (1854): "Popular sovereignty" led to violent conflict
- Bleeding Kansas (1854-1859): Preview of coming civil war—200+ deaths
- Dred Scott Decision (1857): Supreme Court ruled enslaved people not citizens, cannot sue
C. STATES' RIGHTS VS. FEDERAL POWER
Southerners feared growing federal power would threaten slavery:
- Wanted states to decide slavery question independently
- Feared federal government would abolish slavery nationwide
- Believed Constitution protected slavery as property right
- Saw Lincoln's election as existential threat to their way of life
- Viewed secession as exercising state sovereignty granted by Constitution
D. THE ELECTION OF 1860 - IMMEDIATE TRIGGER
**Republican Party Platform:**
- Opposed expansion of slavery into western territories
- Did NOT initially call for abolition in existing slave states
- Supported protective tariffs, internal improvements, Homestead Act
- Promoted "free labor" ideology
**Abraham Lincoln's Victory:**
- Won with only 40% of popular vote but 180 electoral votes
- Did NOT appear on ballot in most Southern states
- Carried every Northern state except New Jersey (split)
- Received ZERO electoral votes from slave states
- South interpreted this as proof they'd lost political power permanently
**Southern Reaction:**
Within weeks, Southern states began seceding. They explicitly stated slavery preservation as the reason in their declarations of secession.
III. SECESSION & WAR BEGINS
**Secession Timeline:**
- December 20, 1860: South Carolina secedes first (unanimous convention vote)
- January-February 1861: Mississippi, Florida, Alabama, Georgia, Louisiana, Texas follow
- February 1861: Confederate States of America formed in Montgomery, Alabama
- Jefferson Davis elected CSA President, Alexander Stephens VP
- April 1861: After Fort Sumter attack, Virginia, Arkansas, North Carolina, Tennessee join (11 total)
- Border slave states (Maryland, Delaware, Kentucky, Missouri) remain in Union
**Fort Sumter (April 12-13, 1861):**
- Federal fort in Charleston harbor, South Carolina
- Lincoln's dilemma: resupply garrison or abandon and recognize Confederacy?
- Chose to resupply, framing it as defensive
- Confederate forces under General Beauregard fire first shots at 4:30 AM
- Fort Sumter surrenders after 34-hour bombardment
- Lincoln calls for 75,000 volunteers to suppress rebellion
- WAR OFFICIALLY BEGINS
IV. MAJOR MILITARY CAMPAIGNS & BATTLES
**Phase 1: Early Confederate Successes (1861-1862)**
- **First Battle of Bull Run (July 21, 1861):** Confederate victory shocked North expecting quick war. Union army routed, fled to Washington. Reality check for both sides.
- **Peninsula Campaign (Spring 1862):** McClellan's overly cautious attempt to take Richmond failed despite numerical superiority
- **Seven Days Battles (June 1862):** Robert E. Lee's aggressive counteroffensive drove Union from Richmond's gates
- **Second Bull Run (August 1862):** Another Confederate victory; Lee at peak of tactical brilliance
**Phase 2: Turning Point Year (1863)**
- **Battle of Antietam (September 17, 1862):** Bloodiest single day in American history
  * 23,000 total casualties (killed, wounded, missing)
  * Tactical draw but strategic Union victory
  * Stopped Lee's invasion of Maryland
  * Gave Lincoln political capital to issue Emancipation Proclamation
- **Battle of Gettysburg (July 1-3, 1863):** THE major turning point
  * Lee's second invasion of North repelled after three days of fighting
  * 51,000 total casualties (7,000+ deaths)
  * Pickett's Charge on Day 3 failed catastrophically
  * Lee never recovered offensive capability
  * Lincoln's Gettysburg Address (November) redefined war's purpose
- **Siege of Vicksburg (May-July 1863):** Grant's masterpiece
  * Captured key Mississippi River fortress after 47-day siege
  * Split Confederacy in two (Texas, Arkansas, Louisiana cut off)
  * Gave Union complete control of Mississippi River
  * Occurred simultaneously with Gettysburg
**Phase 3: Union Offensive & Total War (1864-1865)**
- **Wilderness Campaign (May-June 1864):** Grant vs. Lee in Virginia
  * Series of brutal battles (Wilderness, Spotsylvania, Cold Harbor)
  * 55,000 Union casualties in one month
  * Unlike predecessors, Grant kept advancing despite losses
  * "I propose to fight it out on this line if it takes all summer"
- **Atlanta Campaign (May-September 1864):** Sherman captures vital industrial city
  * Four-month campaign through Georgia
  * Fall of Atlanta (September 2) secured Lincoln's re-election
  * Destroyed Confederate morale and infrastructure
- **Sherman's March to the Sea (November-December 1864):**
  * 300-mile march from Atlanta to Savannah
  * Total war strategy targeting civilian infrastructure
  * Destroyed railroads, factories, crops
  * 60-mile-wide path of destruction
  * Demonstrated Confederate government couldn't protect its citizens
- **Siege of Petersburg (June 1864-April 1865):** Grinding nine-month trench warfare preview of WWI
- **Fall of Richmond (April 2, 1865):** Confederate capital evacuated and burned
- **Appomattox Court House (April 9, 1865):** Lee surrenders Army of Northern Virginia to Grant. War effectively over.
V. THE EMANCIPATION PROCLAMATION - JANUARY 1, 1863
**What It Did:**
- Declared all enslaved people in rebel-held territory "forever free"
- Did NOT free slaves in border states (Maryland, Delaware, Kentucky, Missouri)
- Did NOT free slaves in Union-occupied Confederate areas
- Transformed war from "preserving Union" to "ending slavery"
- Authorized recruitment of Black soldiers into Union Army
**Why Lincoln Issued It:**
- **Moral imperative:** Aligned war with higher purpose
- **Military necessity:** Deprived Confederacy of labor force
- **Diplomatic strategy:** Prevented British/French recognition of Confederacy (couldn't support slaveholders after proclaiming emancipation)
- **Political pressure:** Radical Republicans demanding action
- **Practical timing:** Needed military victory (Antietam) to avoid appearing desperate
**Impact:**
- Eventually 200,000 Black soldiers and sailors served Union cause
- Prevented European intervention on Confederate side
- Made reconciliation without ending slavery impossible
- Shifted international opinion decisively against Confederacy
- Set constitutional stage for 13th Amendment
VI. KEY FIGURES & LEADERSHIP
**Union Leaders:**
- **Abraham Lincoln (1809-1865):** Self-taught lawyer from Illinois. Masterful wartime president who grew into role. Evolved on slavery from containment to abolition. Kept border states in Union. Delivered Gettysburg Address and Second Inaugural. Assassinated by John Wilkes Booth April 15, 1865, days after war ended.
- **Ulysses S. Grant (1822-1885):** Failed businessman who became brilliant general. Understood modern war required relentless pressure and attrition. First to coordinate all Union armies. Accepted Lee's surrender with generous terms. Later 18th President (1869-1877).
- **William T. Sherman (1820-1891):** Grant's best friend and most trusted commander. Pioneered total war concept. "War is hell" quote. March to the Sea broke Confederate will. Famously refused Republican nomination for president in 1884.
- **George McClellan (1826-1885):** "Little Napoleon" who organized Army of Potomac but too cautious to use it effectively. Constantly overestimated enemy strength. Relieved by Lincoln November 1862. Ran against Lincoln in 1864 election and lost badly.
**Confederate Leaders:**
- **Jefferson Davis (1808-1889):** West Point graduate, Mexican War hero, former U.S. Senator and Secretary of War. CSA President struggled with state governors who refused to cooperate. Micromanaged military. Less politically skilled than Lincoln. Captured May 1865, imprisoned two years but never tried for treason.
- **Robert E. Lee (1807-1870):** Son of Revolutionary War hero. Arguably best tactical general of war. Opposed secession but loyal to Virginia. Brilliant in attack and defense. Surrendered honorably at Appomattox. Post-war, became college president, urged reconciliation.
- **Thomas "Stonewall" Jackson (1824-1863):** Lee's most aggressive corps commander. Nicknamed for standing "like a stone wall" at Bull Run. Eccentric, deeply religious. Fatally wounded by friendly fire at Chancellorsville May 1863—devastating loss for Confederacy.
- **James Longstreet (1821-1904):** Lee's "Old War Horse" and most trusted general. Disagreed with Pickett's Charge at Gettysburg. Post-war, joined Republican Party and supported Reconstruction—leading "Lost Cause" advocates to vilify him.
VII. THE HOME FRONT
**Northern Home Front:**
- War economy boomed from production demands
- Women entered workforce in unprecedented numbers
- Draft riots, especially NYC July 1863 (worst urban violence in U.S. history—120 deaths)
- Inflation but overall economy remained strong
- Railroads and industry expanded rapidly
- Greenbacks (paper money) issued to finance war
**Southern Home Front:**
- Severe shortages from Union naval blockade (600+ ships)
- Hyperinflation reached 9,000% by war's end
- Women managed plantations, worked in factories and hospitals
- Infrastructure systematically destroyed
- Bread riots (Richmond April 1863)
- Economy completely collapsed—Confederate currency worthless
- Enslaved people escaped to Union lines (contraband)
VIII. CONSEQUENCES & LEGACY
**Immediate Effects:**
- **Death Toll:** 620,000-750,000 soldiers dead (recent research suggests higher number)
  * Represented 2% of entire U.S. population
  * Equivalent to 6 million deaths in today's population
  * More American deaths than WWI, WWII, Korea, Vietnam, Iraq, Afghanistan COMBINED
- **Constitutional Revolution:**
  * 13th Amendment (1865): Abolished slavery everywhere
  * 14th Amendment (1868): Citizenship for all born in U.S., equal protection
  * 15th Amendment (1870): Voting rights regardless of race (though not enforced in South for nearly a century)
- **Economic Impact:**
  * South utterly devastated—took generations to recover
  * Northern industry massively strengthened
  * National banking system created
  * Transcontinental railroad completed
  * Shift from agricultural to industrial economy accelerated
**Reconstruction Era (1865-1877):**
- Military occupation of former Confederate states
- Freedmen's Bureau established to assist formerly enslaved people
- Brief period of Black political participation (16 Black congressmen)
- White Southern resistance: KKK formed 1866, terrorist violence against Black voters
- Compromise of 1877 ended federal protection
- Jim Crow era of segregation and disenfranchisement begins
**Long-term Legacy:**
- Transformed U.S. from "these United States are" to "the United States is"
- Federal power permanently strengthened over states
- Ended slavery legally but not racism culturally or structurally
- Economic modernization and industrialization accelerated
- Set precedent for total war tactics
- Shaped regional identities and cultures that persist today
- Veterans' organizations (GAR, UCV) shaped politics for 50 years
IX. HISTORIOGRAPHY & INTERPRETATION
**The "Lost Cause" Myth (Post-War Southern Narrative):**
- Claimed war was about states' rights and tariffs, NOT slavery
- Romanticized Confederate cause and leaders
- Portrayed slavery as benevolent institution
- Claimed enslaved people were happy and loyal
- Influenced American textbooks and popular culture for 100+ years
- Led to Confederate monument construction (mostly 1890s-1920s)
**Modern Historical Consensus:**
- Slavery was absolutely the central cause
- Confederate states explicitly stated this in secession documents
- War was tragic but necessary to end slavery
- Reconstruction abandoned too soon
- Legacy of slavery persists in structural racism and inequality
**Why It Matters Today:**
- Essential for understanding roots of systemic racism
- Ongoing debates over Confederate monuments and symbols
- Voting rights battles trace to Reconstruction failures
- Regional cultural differences rooted in war's aftermath
- Questions of federal vs. state power remain relevant`,
     flashcards: [
      { q: "When did the Civil War begin and end?", a: "1861-1865" },
      {
        q: "What triggered the start of the Civil War?",
        a: "Attack on Fort Sumter on April 12, 1861",
      },
      {
        q: "Who was the Union president during the Civil War?",
        a: "Abraham Lincoln",
      },
      { q: "Who was the Confederate president?", a: "Jefferson Davis" },
      {
        q: "What was the Emancipation Proclamation?",
        a: "Lincoln's 1863 order freeing slaves in Confederate states",
      },
      {
        q: "Which battle is considered the turning point?",
        a: "Battle of Gettysburg (July 1863)",
      },
      {
        q: "Where did Lee surrender to Grant?",
        a: "Appomattox Court House, April 9, 1865",
      },
      {
        q: "How many people died in the Civil War?",
        a: "Over 620,000 - the deadliest American war",
      },
    ],
  },

  biology: {
    notes: `Cell Biology - Mitochondria and Cellular Respiration

Mitochondria Structure:
- Double membrane organelle
- Outer membrane: smooth, permeable
- Inner membrane: folded into cristae
- Matrix: inner fluid containing enzymes
- Own DNA (mtDNA) - inherited maternally

Function: "Powerhouse of the cell"
- Produces ATP through cellular respiration
- Regulates cell metabolism
- Involved in apoptosis (cell death)
- Heat generation

Cellular Respiration Process:
1. Glycolysis (cytoplasm)
   - Glucose → 2 pyruvate
   - Produces 2 ATP, 2 NADH
   
2. Krebs Cycle (mitochondrial matrix)
   - Pyruvate → CO2
   - Produces 2 ATP, 6 NADH, 2 FADH2
   
3. Electron Transport Chain (inner membrane)
   - NADH and FADH2 donate electrons
   - Produces ~32-34 ATP
   - O2 final electron acceptor → H2O

Total ATP: ~36-38 per glucose molecule

Mitochondrial Disorders:
- Result from mtDNA mutations
- Affect high-energy organs (brain, heart, muscles)
- Examples: MELAS, Leigh syndrome`,
    summary: `Mitochondria are double-membrane organelles that serve as the cell's power plants, generating ATP through cellular respiration. They contain their own DNA (mtDNA) inherited maternally and have a unique structure with an outer smooth membrane and inner membrane folded into cristae.
**Cellular Respiration (3 Stages):**
1. **Glycolysis** (cytoplasm): Glucose → 2 pyruvate, producing 2 ATP and 2 NADH
2. **Krebs Cycle** (matrix): Pyruvate → CO2, producing 2 ATP, 6 NADH, 2 FADH2
3. **Electron Transport Chain** (inner membrane): NADH/FADH2 transfer electrons, producing ~32-34 ATP
**Total Energy:** One glucose molecule yields approximately 36-38 ATP molecules
**Key Functions:**
- ATP production (primary energy currency)
- Metabolic regulation
- Apoptosis control
- Heat generation in brown fat
**Clinical Significance:** Mitochondrial dysfunction causes disorders affecting high-energy tissues like brain, heart, and muscles`,
    flashcards: [
      {
        q: "What is the primary function of mitochondria?",
        a: "Producing ATP through cellular respiration",
      },
      {
        q: "How many membranes do mitochondria have?",
        a: "Two - an outer smooth membrane and inner folded membrane",
      },
      {
        q: "What are cristae?",
        a: "Folds of the inner mitochondrial membrane that increase surface area",
      },
      {
        q: "Where does glycolysis occur?",
        a: "In the cytoplasm, outside the mitochondria",
      },
      {
        q: "Where does the Krebs cycle occur?",
        a: "In the mitochondrial matrix",
      },
      {
        q: "Where is the electron transport chain located?",
        a: "On the inner mitochondrial membrane",
      },
      {
        q: "How much ATP does one glucose molecule produce?",
        a: "Approximately 36-38 ATP molecules total",
      },
      {
        q: "How is mitochondrial DNA inherited?",
        a: "Maternally - only from the mother",
      },
    ],
  },

  math: {
    notes: `Calculus II - Integration Techniques

Integration by Parts:
Formula: ∫u dv = uv - ∫v du
- Choose u using LIATE rule:
  L - Logarithmic
  I - Inverse trig
  A - Algebraic
  T - Trigonometric
  E - Exponential

Example: ∫x·e^x dx
- u = x, dv = e^x dx
- du = dx, v = e^x
- = x·e^x - ∫e^x dx = x·e^x - e^x + C

Trigonometric Substitution:
For √(a² - x²): use x = a·sin(θ)
For √(a² + x²): use x = a·tan(θ)
For √(x² - a²): use x = a·sec(θ)

Partial Fractions:
Decompose rational functions:
- Linear factors: A/(x-a)
- Repeated linear: A/(x-a) + B/(x-a)²
- Quadratic: (Ax+B)/(x²+bx+c)

Applications:
- Area between curves
- Volume of revolution (disk/shell method)
- Arc length
- Work and energy problems`,
    summary: `Integration techniques in Calculus II extend basic integration to handle complex functions through three main methods:
**1. Integration by Parts**
Formula: ∫u dv = uv - ∫v du
Use LIATE rule to choose u: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential
Best for products of different function types
**2. Trigonometric Substitution**
Replace algebraic expressions with trig functions:
- √(a² - x²) → x = a sin(θ)
- √(a² + x²) → x = a tan(θ)
- √(x² - a²) → x = a sec(θ)
**3. Partial Fractions**
Decompose rational functions into simpler fractions for easier integration. Handle linear, repeated, and quadratic factors separately.
**Applications:**
- Calculate areas between curves
- Find volumes using disk/shell methods
- Determine arc lengths
- Solve physics problems (work, energy)
**Key Strategy:** Identify the integrand structure and choose the most efficient technique`,
    flashcards: [
      {
        q: "What is the integration by parts formula?",
        a: "∫u dv = uv - ∫v du",
      },
      {
        q: "What does LIATE stand for?",
        a: "Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential",
      },
      {
        q: "When do you use trigonometric substitution?",
        a: "For integrals containing √(a² ± x²) or √(x² - a²)",
      },
      { q: "What substitution for √(a² - x²)?", a: "x = a sin(θ)" },
      { q: "What substitution for √(a² + x²)?", a: "x = a tan(θ)" },
      {
        q: "What is partial fraction decomposition?",
        a: "Breaking rational functions into simpler fractions for easier integration",
      },
      {
        q: "What are the two volume methods?",
        a: "Disk method and shell method",
      },
      {
        q: "When is integration by parts most useful?",
        a: "For products of different function types (e.g., x·e^x or x·ln(x))",
      },
    ],
  },

  english: {
    notes: `Shakespeare - Romeo and Juliet Analysis

Main Themes:
1. Love vs. Hate
   - Passionate love vs family feud
   - Love as transcendent force
   
2. Fate vs. Free Will
   - "Star-crossed lovers"
   - Choices lead to tragedy
   
3. Youth vs. Age
   - Impulsive young lovers
   - Wise but powerless elders
   
4. Individual vs. Society
   - Personal desires vs social expectations

Key Symbols:
- Light/Dark imagery (love in darkness)
- Poison (death and transformation)
- Thumb-biting (insult, conflict)

Character Analysis:
Romeo: Impulsive, romantic, emotional
Juliet: Initially obedient, becomes decisive
Mercutio: Witty, loyal, represents reason
Tybalt: Aggressive, honor-bound
Friar Lawrence: Well-meaning but flawed

Plot Structure:
- Acts I-II: Meeting and marriage
- Act III: Turning point (Mercutio/Tybalt deaths)
- Acts IV-V: Failed plan and tragedy

Literary Devices:
- Iambic pentameter
- Sonnets (prologue, lovers' first meeting)
- Dramatic irony
- Foreshadowing
- Oxymorons ("loving hate")`,
    summary: `Romeo and Juliet is Shakespeare's tragedy exploring the conflict between passionate love and societal hatred through the story of two young lovers from feuding families.
**Central Themes:**
- **Love vs. Hate:** Individual love confronts generational family feuds
- **Fate vs. Free Will:** Despite being "star-crossed," their choices drive the tragedy
- **Youth vs. Age:** Impulsive young passion versus cautious elderly wisdom
- **Individual vs. Society:** Personal desires clash with family expectations
**Key Symbolism:**
- Light/dark imagery represents love flourishing in secrecy
- Poison symbolizes both death and transformation
- Religious imagery elevates their love to sacred status
**Tragic Structure:**
Acts I-II establish romance and secret marriage. Act III marks the turning point with Mercutio and Tybalt's deaths. Acts IV-V show the failed plan leading to double suicide.
**Literary Significance:**
Shakespeare uses iambic pentameter, sonnets, dramatic irony, and oxymorons to create poetic complexity. The play questions whether love can overcome hate and explores consequences of hasty decisions.
**Modern Relevance:** Continues to resonate through themes of forbidden love, family conflict, and youthful passion`,
    flashcards: [
      { q: "What are the two feuding families?", a: "Montagues and Capulets" },
      {
        q: "What does 'star-crossed lovers' mean?",
        a: "Lovers doomed by fate",
      },
      {
        q: "What is the turning point of the play?",
        a: "Act III - deaths of Mercutio and Tybalt",
      },
      {
        q: "Who is Mercutio?",
        a: "Romeo's witty, loyal friend who represents reason and is killed by Tybalt",
      },
      { q: "What meter does Shakespeare use?", a: "Iambic pentameter" },
      {
        q: "What is an oxymoron in the play?",
        a: "'Loving hate' or 'heavy lightness' - contradictory terms combined",
      },
      {
        q: "What is Juliet's famous balcony line?",
        a: "'Romeo, Romeo, wherefore art thou Romeo?' (Why are you Romeo?)",
      },
      {
        q: "How do Romeo and Juliet die?",
        a: "Romeo drinks poison, Juliet stabs herself",
      },
    ],
  },
};
