new Vue
  el: '#App'
  
  data:
    electrons: 0
    electronsSlide: 1
    diagram: []
    sequence: {}
    notation: []
    showFullNotation: false
    layers: []
    search: 'H'
    elements: ['', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']

    infoDialog: false
    help: [
      'You can select any element through the slider by its atomic number, or by clicking on the nucleus and typing its initials.'
      'written below the slider there is the simple notation of the distribution of the electrons, clicking on it expands the complete notation.'
      'the magnifying glass button does a google search for more information of the selected element, if you have any input error it will be disabled.'
    ]
  
  
  methods:
    buildDiagram: ->
      for i in [0..6]
        length = - Math.abs(i - 3.5) + 4.5
        @diagram.push Array(length).fill 0
  
  
    generateSequence: ->
      [posX, posY] = [[], []]

      for x in [0..30]
        a = 3 - x % 4
        b = x - 3 * Math.round x / 4
        l = x / 6.7

        if a <= l then posX.push a
        if b >= l then posY.push b
      @sequence = { posX, posY }
            
            
    distributeElectrons: ->
      count = if @electrons >= 0 then @electrons else 0
        
      for _, i in @sequence.posX
        { posX, posY } = @sequence
        [ x, y ] = [ posX[i], posY[i] ]
        count -= @diagram[y][x] = if count < 2 + 4 * x then count else 2 + 4 * x
        
        
    writeNotation: ->
      sublayers = ['s', 'p', 'd', 'f']
      @notation.length = 0
      
      for _, i in @sequence.posX
        { posX, posY } = @sequence
        [ x, y ] = [ posX[i], posY[i] ]
        
        if @diagram[y][x] then @notation.push
          location: (y + 1) + sublayers[x]
          electrons: @diagram[y][x]
          
      if @notation.length > 5 then @notation.splice 2, 0, '...'
          
          
    getLayersElectrons: ->
      @layers.length = 0
      for layer in @diagram then @layers.push layer.reduce (a, b) => a + b
      
    
    increment: (value) ->
      if @electrons > 1 and value < 0 or @electrons < 118 and value > 0
        @electrons += value
        
        
    updateElectrons: ->
      @electrons = @electronsSlide
        
        
    updateElementName: ->
      @search = @elements[@electrons]
    
    
    reversedArr: (arr) ->
      for i in [arr.length - 1..0] by -1 then arr[i]
      
    
    googleSearchElement: ->
      name = @elements[@electrons]
      window.open "https://www.google.com.br/search?q=element+#{name}+#{@electrons}+periodic+table"

      
  watch:
    electrons: ->
      @distributeElectrons()
      @writeNotation()
      @getLayersElectrons()
      if @electrons > 0 then @electronsSlide = @electrons
                          
    search: ->
      @electrons = @elements.indexOf(@search)
      
  
  filters:
    electronsIndicator: (val) ->
      if val > 0 then val else '?'
        
        
  beforeMount: ->
    @buildDiagram()
    @generateSequence()
    
    
  mounted: ->
    @electrons = 1
