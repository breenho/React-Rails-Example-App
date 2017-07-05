class Api::V1::ItemsController < Api::V1::BaseController
	def index
		respond_with Item.all
	end

	private

	def item_params
		params.require(:item).permit(:id,:name,:description)
	end
end