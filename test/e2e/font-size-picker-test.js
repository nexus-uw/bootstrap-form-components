casper.test.begin('font size picker: size list', function (test) {
  casper.start('http://localhost:8099/test/e2e/font-size-picker-test.html', function () {
    test.assertTitle('Font Size Picker - Test Page', "Page title is the one expected");
    test.assertSelectorHasText('.filter-option', '18', "Default size is 18");
  });


  casper.run(function() {
    test.done();
  });
});
