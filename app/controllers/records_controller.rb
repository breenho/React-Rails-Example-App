class RecordsController < ApplicationController
	def index
		@record = Record.all
	end
end
