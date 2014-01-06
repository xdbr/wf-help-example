app.controller('MainCtrl', function($scope) {
  $scope.query = "The queries, they are a changin'";
  $scope.activeView = 'help'; // 'search'
  $scope.title = 'Help'
  $scope.helpSections = [
    { 
      title: 'einfache Suche nach Wörtern',
      examples: [
        { query: "schwarz",           explanation: 'search for literal "schwarz"' },
        { query: '"schwarzer"',       explanation: 'explanation1' },
        { query: "schwarz Kreis",     explanation: 'explanation2' },
        { query: '"schwarzen" Kreis', explanation: 'explanation3' },
        { query: "der Kreis",         explanation: 'explanation4' },
        { query: "der * Kreis",       explanation: 'explanation5' },
        { query: "der Kr*",           explanation: 'explanation6' },
      ],
      details: {
        headings: ['Kategorie', 'Tag'],
        rows: [
          ['Satzanfang', '<BOS>'],
          ['Satzende', '<EOS>'],
          ['beliebiges Wort', '* oder <MOT>'],
          ['Punktuations-Zeichen', '<PUNCT>'],
          ['Alternative', ';']
        ]
      }
    },
    {
      title: 'Satzkategorien',
      examples: [
        { query: 'mir <PUNCT> was',       explanation: 'explanation0' },
        { query: '"mir" <PUNCT> "was"',   explanation: 'explanation1' },
        { query: '<PUNCT> <MOT> <PUNCT>', explanation: 'explanation2' }
      ]
    },
    // { title: 'Lexikalische Wortkategorien', },
    // { title: 'Lexikalische Kategorien um morphologische verfeinert', },
    // { title: 'Semantische Kategorien', },
    // { title: 'Syntaktische Wortkategorien (extrahiert mit Treetagger von Dr. habil(!) H. Schmid,CIS)', },
  ];
  
  // $scope.setQuery = function() {
  //   $scope.activeView = 'search';
  // };

  $scope.setQuery = function(item) {
    console.log('setQuery clicked with item = ' + item);
    $scope.query = item;
    // you could fire off a query here and make the help section fold away
    // $scope.activeView = 'search';
  };

  $scope.submitQuery = function(query) {
    console.log('searching for query = ' + query);
    $scope.activeView = 'search';
  };
  
  $scope.fakeResults = ['foo', 'bar'];
});
