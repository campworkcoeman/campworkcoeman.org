#
# Adds table class to tables for Bootstrap tables
#

module Jekyll
  module Filters
    def bootstrapTables(input)
      input.gsub(/<table>/, '<table class="table table-striped">')
    end
  end
end
